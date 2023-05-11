import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart · Increment quantity
  const [count, setCount] = useState(0);

 

  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});

  // shopin cart . add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  // shopin Cart . Order
  const [order, setOrder] = useState([]);

  // Checkout side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);
 //get products
 const [items, setItems] = useState(null);

 //get products
 const [filteredItems, setFilteredItems] = useState(null);

 // Get products by title
 const [searchByTitle, setSearchByTitle] = useState(null);
 console.log("searchByTitle: ", searchByTitle);
 
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);
 // console.log('djgdngf', filteredItems)




const filteredItemsByCategory = (items, searchByCategory) => {
  return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
}

const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
  if (searchType === 'BY_TITLE') {
    return filteredItemsByTitle(items, searchByTitle)
  }

  if (searchType === 'BY_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory)
  }

  if (searchType === 'BY_TITLE_AND_CATEGORY') {
    return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  if (!searchType) {
    return items
  }
}

useEffect(() => {
  if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
  if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
  if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
  if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
}, [items, searchByTitle, searchByCategory])



  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
       setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
