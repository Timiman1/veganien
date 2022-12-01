import { MenuItem } from "~~/entities/menuItem";
import { FindByCategory } from "./interfaces/findByCategory";

export class MockMenuItemRepository implements FindByCategory<MenuItem> {
    private readonly _collection: MenuItem[];

    constructor() {
        this._collection= [
            { 
                imageSrc: "/img/menu/main-courses/1.jpg",
                title: "Curryrulle",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Huvudrätter"
            },
            { 
                imageSrc: "/img/menu/main-courses/2.jpg",
                title: "Bakad Potatis",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Huvudrätter"
            },
            { 
                imageSrc: "/img/menu/main-courses/3.jpg",
                title: "Röd Söt Wrap",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Huvudrätter"
            },
            { 
                imageSrc: "/img/menu/main-courses/4.jpg",
                title: "Quesadilla",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Huvudrätter"
            },
            {
                imageSrc: "/img/menu/main-courses/5.jpg",
                title: "Jazz Sallad",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Huvudrätter"
            },
            { 
                imageSrc: "/img/menu/sweets/1.jpg",
                title: "Morotskaka",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/2.jpg",
                title: "RAW Chokladboll",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/3.jpg",
                title: "RAW Glass - Mango Passion Toffe Pie",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/4.jpg",
                title: "RAW Glass - Cookie & Caramel Euphoria",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/5.jpg",
                title: "RAW Glass - Chocolate Love Energy",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            {
                imageSrc: "/img/menu/sweets/1.jpg",
                title: "Glasspinnar - Salted Caramel <3 Hazelnut",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/2.jpg",
                title: "Glasspinnar - Strawberry <3 Strawberry",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            { 
                imageSrc: "/img/menu/sweets/3.jpg",
                title: "Glasspinnar - Chocolate <3 Chokladboll",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            },
            {
                imageSrc: "/img/menu/sweets/4.jpg",
                title: "RAW Energibollar",
                description: "dolor sit amet, consectetur adipiscing elit. Ut et risus in neque venenatis aliquam.",
                category: "Sötsaker"
            }
        ]
    }
    async findByCategory(category: string): Promise<MenuItem[]> {
        return await Promise.all(this._collection.filter(m => m.category == category)) 
    }
}