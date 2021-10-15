import create from "zustand";

type Item = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
};

const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (item: Item) => {
    set((state: { items: Item[] }) => {
      if (state.items.find((i) => i.id === item.id)) {
        return {
          items: state.items.map((i) => {
            if (i.id === item.id) {
              i.quantity += item.quantity;
            }
            return i;
          }),
        };
      }

      return {
        items: [...state.items, item],
      };
    });
  },
  removeItem: (id: string) => {
    set((state: { items: Item[] }) => {
      const isLastItem = state.items.some((item) => {
        if (item.id === id && item.quantity === 1) {
          return true;
        }
      });

      if (isLastItem) {
        return {
          items: state.items.filter((item) => item.id !== id),
        };
      }

      return {
        items: state.items.map((item) => {
          if (item.id === id) {
            item.quantity = item.quantity - 1;
          }
          return item;
        }),
      };
    });
  },
}));

export default useCart;
