import actionTypes from '../actions/actionTypes';
const initialState = {
    genders: [],
    roles: [],
    users: [],
    category: [],
    brands: [],
    warranties: [],
    subjects: [],
    discounts: [],
    sizes: [],
    products: [],
    productImage: [],
    banners: [],
    typeShips: [],
    blogs: [],
    typeVouchers: [],
    vouchers: []
}
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ALLCODE_GENDER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_GENDER_SUCCESS:
            state.genders = action.dataGender;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_GENDER_FAILED:
            state.genders = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_ROLE_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_ROLE_SUCCESS:
            state.roles = action.dataRole;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_CATEGORY_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_CATEGORY_SUCCESS:
            state.category = action.dataCategory;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_CATEGORY_FAILED:
            state.category = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_BRAND_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_BRAND_SUCCESS:
            state.brands = action.dataBrand;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_BRAND_FAILED:
            state.brands = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_WARRANTY_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_WARRANTY_SUCCESS:
            state.warranties = action.dataWarranty;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_WARRANTY_FAILED:
            state.warranties = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SUBJECT_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SUBJECT_SUCCESS:
            state.subjects = action.dataSubject;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SUBJECT_FAILED:
            state.subjects = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_DISCOUNT_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_DISCOUNT_SUCCESS:
            state.discounts = action.dataDiscount;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_DISCOUNT_FAILED:
            state.discounts = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SIZE_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SIZE_SUCCESS:
            state.sizes = action.dataSize;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_SIZE_FAILED:
            state.sizes = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_USER_FAILED:
            state.users = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_SUCCESS:
            state.products = action.dataProduct;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_FAILED:
            state.products = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_SUCCESS:
            state.productImage = action.dataProductImage;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_PRODUCT_IMAGE_FORM_PRODUCT_FAILED:
            state.productImage = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BANNER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BANNER_SUCCESS:
            state.banners = action.dataBanner;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BANNER_FAILED:
            state.banners = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_SHIP_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_SHIP_SUCCESS:
            state.typeShips = action.dataTypeShip;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_SHIP_FAILED:
            state.typeShips = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BLOG_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BLOG_SUCCESS:
            state.blogs = action.dataBlog;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_BLOG_FAILED:
            state.blogs = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_VOUCHER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_VOUCHER_SUCCESS:
            state.typeVouchers = action.dataTypeVoucher;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_TYPE_VOUCHER_FAILED:
            state.typeVouchers = [];
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_VOUCHER_START:
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_VOUCHER_SUCCESS:
            state.vouchers = action.dataVoucher;
            return {
                ...state,
            }
        case actionTypes.FETCH_ALL_VOUCHER_FAILED:
            state.vouchers = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}
export default adminReducer;