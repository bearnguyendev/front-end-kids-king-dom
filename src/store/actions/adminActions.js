import actionTypes from './actionTypes';
import { getAllCodeService, createANewUser, deleteUserService, editUserService, getAllUsers, getAllProducts, deleteProductService, getAllProductImageFromProductService, getAllBanners, getAllTypeShips, getAllBlogs, getAllTypeVouchers, getAllVouchers } from "../../services/userService";
import { toast } from 'react-toastify'
export const fetchAllcodeGenders = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_GENDER_START })
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_GENDER_SUCCESS,
                    dataGender: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_GENDER_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_GENDER_FAILED
            })
            console.log("FETCH_ALLCODE_GENDER_FAILED: ", error);
        }
    }
}
export const fetchAllcodeRoles = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_ROLE_START })
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_ROLE_SUCCESS,
                    dataRole: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_ROLE_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_ROLE_FAILED
            })
            console.log("FETCH_ALLCODE_ROLE_FAILED: ", error);
        }
    }
}
export const fetchAllcodeCategory = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_CATEGORY_START })
            let res = await getAllCodeService("CATEGORY");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_CATEGORY_SUCCESS,
                    dataCategory: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_CATEGORY_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_CATEGORY_FAILED
            })
            console.log("FETCH_ALLCODE_CATEGORY_FAILED: ", error);
        }
    }
}
export const fetchAllcodeBrands = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_BRAND_START })
            let res = await getAllCodeService("BRAND");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_BRAND_SUCCESS,
                    dataBrand: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_BRAND_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_BRAND_FAILED
            })
            console.log("FETCH_ALLCODE_BRAND_FAILED: ", error);
        }
    }
}
export const fetchAllcodeWarranties = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_WARRANTY_START })
            let res = await getAllCodeService("WARRANTY");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_WARRANTY_SUCCESS,
                    dataWarranty: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_WARRANTY_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_WARRANTY_FAILED
            })
            console.log("FETCH_ALLCODE_WARRANTY_FAILED: ", error);
        }
    }
}
export const fetchAllcodeSubjects = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_SUBJECT_START })
            let res = await getAllCodeService("SUBJECT");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SUBJECT_SUCCESS,
                    dataSubject: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SUBJECT_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SUBJECT_FAILED
            })
            console.log("FETCH_ALLCODE_SUBJECT_FAILED: ", error);
        }
    }
}
export const fetchAllcodeDiscounts = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_DISCOUNT_START })
            let res = await getAllCodeService("DISCOUNT");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_DISCOUNT_SUCCESS,
                    dataDiscount: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_DISCOUNT_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_DISCOUNT_FAILED
            })
            console.log("FETCH_ALLCODE_DISCOUNT_FAILED: ", error);
        }
    }
}
export const fetchAllcodeSizes = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALLCODE_SIZE_START })
            let res = await getAllCodeService("SIZE");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SIZE_SUCCESS,
                    dataSize: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SIZE_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SIZE_FAILED
            })
            console.log("FETCH_ALLCODE_SIZE_FAILED: ", error);
        }
    }
}
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.CREATE_USER_START })
            let res = await createANewUser(data);
            if (res && res.errCode === 0) {
                dispatch(saveUserSuccess())
                toast.success("Create a new user success!")
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Create a new user error!")
                dispatch(saveUserFailed())
            }
        } catch (error) {
            toast.error("Create a new user error!")
            dispatch(saveUserFailed())
            console.log("saveUserFailed error: ", error);
        }
    }
}
export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

export const fetchAllUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_USER_START })
            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.data))
            } else {
                toast.error("Fetch all user error!")
                dispatch(fetchAllUserFailed())
            }
        } catch (error) {
            toast.error("Fetch all user error!")
            dispatch(fetchAllUserFailed())
            console.log("fetchAllUserFailed error: ", error);
        }
    }
}
export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data
})
export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.DELETE_USER_START })
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {
                dispatch(deleteUserSuccess())
                toast.success(res.errMessage)
                dispatch(fetchAllUserStart())
            } else {
                toast.error(res.errMessage)
                dispatch(deleteUserFailed())
            }
        } catch (error) {
            toast.error("Delete a user error!")
            dispatch(deleteUserFailed())
            console.log("deleteUserFailed error: ", error);
        }
    }
}
export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.EDIT_USER_START })
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                dispatch(editUserSuccess())
                toast.success("Update a user success!")
                dispatch(fetchAllUserStart())
            } else {
                toast.error("Update a user error!")
                dispatch(editUserFailed())
            }
        } catch (error) {
            toast.error("Update a user error!")
            dispatch(editUserFailed())
            console.log("editUserFailed error: ", error);
        }
    }
}
export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

export const fetchAllProducts = (statusId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_PRODUCT_START })
            let res = await getAllProducts(statusId);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
                    dataProduct: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCT_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_PRODUCT_FAILED
            })
            console.log("FETCH_ALL_PRODUCT_FAILED: ", error);
        }
    }
}
export const deleteAProduct = (productId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.DELETE_PRODUCT_START })
            let res = await deleteProductService(productId);
            if (res && res.errCode === 0) {
                dispatch(deleteProductSuccess())
                toast.success(res.errMessage)
                dispatch(fetchAllProducts('ALL'))
            } else {
                toast.error(res.errMessage)
                dispatch(deleteProductFailed())
            }
        } catch (error) {
            toast.error("Xoá sản phẩm thất bại!")
            dispatch(deleteProductFailed())
            console.log("deleteProductFailed error: ", error);
        }
    }
}
export const deleteProductSuccess = () => ({
    type: actionTypes.DELETE_PRODUCT_SUCCESS
})
export const deleteProductFailed = () => ({
    type: actionTypes.DELETE_PRODUCT_FAILED
})
export const fetchAllProductImageFromProduct = (productId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_START })
            let res = await getAllProductImageFromProductService(productId);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_SUCCESS,
                    dataProductImage: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_FAILED
            })
            console.log("FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_FAILED: ", error);
        }
    }
}
export const fetchAllBanners = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_BANNER_START })
            let res = await getAllBanners();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_BANNER_SUCCESS,
                    dataBanner: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_BANNER_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_BANNER_FAILED
            })
            console.log("FETCH_ALL_BANNER_FAILED: ", error);
        }
    }
}
export const fetchAllTypeShips = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_TYPE_SHIP_START })
            let res = await getAllTypeShips();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_TYPE_SHIP_SUCCESS,
                    dataTypeShip: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_TYPE_SHIP_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_TYPE_SHIP_FAILED
            })
            console.log("FETCH_ALL_TYPE_SHIP_FAILED: ", error);
        }
    }
}
export const fetchAllBlogs = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_BLOG_START })
            let res = await getAllBlogs();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_BLOG_SUCCESS,
                    dataBlog: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_BLOG_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_BLOG_FAILED
            })
            console.log("FETCH_ALL_BLOG_FAILED: ", error);
        }
    }
}
export const fetchAllTypeVouchers = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_TYPE_VOUCHER_START })
            let res = await getAllTypeVouchers();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_TYPE_VOUCHER_SUCCESS,
                    dataTypeVoucher: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_TYPE_VOUCHER_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_TYPE_VOUCHER_FAILED
            })
            console.log("FETCH_ALL_TYPE_VOUCHER_FAILED: ", error);
        }
    }
}
export const fetchAllVouchers = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ALL_VOUCHER_START })
            let res = await getAllVouchers();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_VOUCHER_SUCCESS,
                    dataVoucher: res.data,
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_VOUCHER_FAILED
                })
            }
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_ALL_VOUCHER_FAILED
            })
            console.log("FETCH_ALL_VOUCHER_FAILED: ", error);
        }
    }
}