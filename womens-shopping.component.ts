import { Component } from '@angular/core';

interface Category {
  name: string;
  types: string[];
}

interface CartItem {
  id: number; // Unique identifier for each item
  category: string;
  type: string;
  quantity: number; // New property for quantity
}

@Component({
  selector: 'app-womens-shopping',
  templateUrl: './womens-shopping.component.html',
  styleUrls: ['./womens-shopping.component.css']
})
export class WomensShoppingComponent {
  categories: Category[] = [
    { name: 'Sarees', types: ['Silk Sarees', 'Cotton Sarees', 'Designer Sarees'] },
    { name: 'Salwar', types: ['Churidar', 'Patiala', 'Anarkali'] },
    { name: 'Frock', types: ['Party Wear', 'Casual', 'Maxi Dress'] },
    { name: 'T-shirt', types: ['Round Neck', 'V-neck', 'Polo'] },
    { name: 'Jeans', types: ['Skinny Jeans', 'Bootcut Jeans', 'Momfit Jeans'] }
  ];

  selectedCategory: Category | null = null;
  selectedType: string | null = null;

  cart: CartItem[] = [];
  nextItemId = 1; 

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedType = null; 
  }

  selectType(type: string): void {
    this.selectedType = type;
  }

  addToCart(): void {
    if (this.selectedCategory && this.selectedType) {
      const newItem: CartItem = {
        id: this.nextItemId++,
        category: this.selectedCategory.name,
        type: this.selectedType,
        quantity: 1 
      };
      this.cart.push(newItem);
      
    }
  }

  editItem(updatedItem: CartItem): void {
    const index = this.cart.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.cart[index] = { ...updatedItem };
    }
  }

  deleteItem(itemId: number): void {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }

  isCategorySelected(category: Category): boolean {
    return this.selectedCategory === category;
  }

  quantityOptions = [1, 2, 3, 4, 5];

}
