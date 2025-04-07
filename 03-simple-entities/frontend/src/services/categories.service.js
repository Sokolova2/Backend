export async function fetchCategories() {
    try {
        const response = await fetch('http://localhost:8081/api/categories/');
        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error('Error fetching:', error);
        return []; 
    }
}
