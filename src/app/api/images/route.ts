import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export async function GET() {
  try {
    const slidesRef = collection(db, 'logo_slides');
    // Order by 'order' field if it exists, otherwise default order
    const q = query(slidesRef, orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);

    const slides = querySnapshot.docs.map(doc => {
      const data = doc.data();
      let src = data.imageUrl;
      
      // If it's just a filename (doesn't start with http), assume it's in the local assets folder
      if (src && !src.startsWith('http')) {
        src = `assets/logos_photos/${src}`;
      }

      return {
        src: src,
        link: data.link || null
      };
    });

    return NextResponse.json(slides);
  } catch (error) {
    console.error('Error fetching slides from Firestore:', error);
    return NextResponse.json({ error: 'Failed to fetch slides' }, { status: 500 });
  }
}
