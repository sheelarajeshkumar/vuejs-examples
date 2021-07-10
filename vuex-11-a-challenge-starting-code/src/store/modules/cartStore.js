export default {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  mutations: {
    addProductToCart(state, productData) {
      const productInCartIndex = state.cart.items.findIndex(
        ci => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.cart.items.push(newItem);
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },

    removeProductFromCart(state, prodId) {
      const productInCartIndex = state.cart.items.findIndex(
        cartItem => cartItem.productId === prodId
      );
      const prodData = state.cart.items[productInCartIndex];
      state.cart.items.splice(productInCartIndex, 1);
      state.cart.qty -= prodData.qty;
      state.cart.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addProductToCart(context, payload) {
      //console.log(context, payload);
      const products = context.rootGetters['products/products'];
      const product = products.find(p => p.id === payload.id);
      context.commit('addProductToCart', product);
    },
    removeProductFromCart({ commit }, payload) {
      //console.log(context, payload);
      commit('removeProductFromCart', payload);
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    total(state) {
      return state.cart.total.toFixed(2);
    },
    items(state) {
      return state.cart.items;
    },
    qty(state) {
      return state.cart.qty;
    }
  }
};
