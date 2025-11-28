import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export type SlideData = {
    src: string;
    link: string | null;
};

export const fetchSlides = async (): Promise<SlideData[]> => {
    try {
        const slidesRef = collection(db, 'logo_slides');
        const q = query(slidesRef, orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => {
            const docData = doc.data();
            let src = docData.imageUrl;
            
            // If it's just a filename (doesn't start with http), assume it's in the local assets folder
            if (src && !src.startsWith('http')) {
                src = `assets/logos_photos/${src}`;
            }

            return {
                src: src,
                link: docData.link || null
            };
        });
    } catch (error) {
        console.error('Failed to fetch slides:', error);
        return [];
    }
};
