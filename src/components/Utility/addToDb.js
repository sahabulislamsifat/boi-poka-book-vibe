import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListString = localStorage.getItem("read-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exists in the read list.");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListString);
    // Ideally trigger toast form component
    toast("This book is added to your read list.");
  }
};

// tow
const getStoredWishList = () => {
  const storedWishListString = localStorage.getItem("wish-list");
  if (storedWishListString) {
    const storedWishList = JSON.parse(storedWishListString);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, "already exists in the wish list.");
  } else {
    storedWishList.push(id);
    const storedWishListString = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListString);
  }
};

export {
  addToStoredReadList,
  addToStoredWishList,
  getStoredReadList,
  getStoredWishList,
};
