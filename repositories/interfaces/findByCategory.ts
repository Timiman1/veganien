export interface FindByCategory<T> {
    findByCategory(category: string): Promise<T[]>
}