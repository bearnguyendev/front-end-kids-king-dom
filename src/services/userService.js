import axios from '../axios';
const handleLogin = (data) => {
    return axios.post(`/api/login`, data)
}
const sendForgotPassword = (email) => {
    return axios.post(`/api/send-forgot-password`, email)
}
const handleResetPassword = (data) => {
    return axios.post(`/api/reset-password`, data)
}
const createANewUser = (data) => {
    return axios.post(`/api/create-a-new-user`, data)
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-a-user', { data: { id: userId } })
}
const editUserService = (data) => {
    return axios.put('/api/edit-a-user', data)
}
const getAllUsers = (statusId) => {
    return axios.get(`/api/get-all-user?statusId=${statusId}`)
}
const handleChangePassword = (data) => {
    return axios.put('/api/change-password', data)
}
const handleChangeStatusUser = (data) => {
    return axios.put('/api/change-status-user', data)
}
const getAllCodeService = (type) => {
    return axios.get(`/api/get-all-code?type=${type}`)
}
const createANewAllCode = (data) => {
    return axios.post(`/api/create-new-all-code`, data)
}
const editAllCodeService = (data) => {
    return axios.put('/api/update-all-code', data)
}
const deleteAllCodeService = (allCodeId) => {
    return axios.delete('/api/delete-all-code', { data: { id: allCodeId } })
}
const createNewProduct = (data) => {
    return axios.post(`/api/create-new-product`, data)
}
const getAllProducts = (statusId) => {
    return axios.get(`/api/get-all-product?statusId=${statusId}`)
}
const editProductService = (data) => {
    return axios.put('/api/update-product', data)
}
const deleteProductService = (productId) => {
    return axios.delete('/api/delete-product', { data: { id: productId } })
}
const handleChangeStatusProduct = (data) => {
    return axios.put('/api/change-status-product', data)
}

const getAllProductImageFromProductService = (productId) => {
    return axios.get(`/api/get-all-product-image-from-product?productId=${productId}`)
}
const createNewProductImageService = (data) => {
    return axios.post(`/api/create-new-product-image`, data)
}
const editProductImageService = (data) => {
    return axios.put('/api/update-product-image', data)
}
const deleteProductImageService = (id) => {
    return axios.delete('/api/delete-product-image', { data: { id: id } })
}
const createNewBannerService = (data) => {
    return axios.post(`/api/create-new-banner`, data)
}
const editBannerService = (data) => {
    return axios.put('/api/update-banner', data)
}
const deleteBannerService = (id) => {
    return axios.delete('/api/delete-banner', { data: { id: id } })
}
const getAllBanners = () => {
    return axios.get(`/api/get-all-banner`)
}
const handleChangeStatusBanner = (data) => {
    return axios.put('/api/change-status-banner', data)
}
const createNewTypeShipService = (data) => {
    return axios.post(`/api/create-new-type-ship`, data)
}
const editTypeShipService = (data) => {
    return axios.put('/api/update-type-ship', data)
}
const deleteTypeShipService = (id) => {
    return axios.delete('/api/delete-type-ship', { data: { id: id } })
}
const getAllTypeShips = () => {
    return axios.get(`/api/get-all-type-ship`)
}
const createNewBlogService = (data) => {
    return axios.post(`/api/create-new-blog`, data)
}
const editBlogService = (data) => {
    return axios.put('/api/update-blog', data)
}
const deleteBlogService = (id) => {
    return axios.delete('/api/delete-blog', { data: { id: id } })
}
const getAllBlogs = () => {
    return axios.get(`/api/get-all-blog`)
}
const handleChangeStatusBlog = (data) => {
    return axios.put('/api/change-status-blog', data)
}
const createNewTypeVoucherService = (data) => {
    return axios.post(`/api/create-new-type-voucher`, data)
}
const editTypeVoucherService = (data) => {
    return axios.put('/api/update-type-voucher', data)
}
const deleteTypeVoucherService = (id) => {
    return axios.delete('/api/delete-type-voucher', { data: { id: id } })
}
const getAllTypeVouchers = () => {
    return axios.get(`/api/get-all-type-voucher`)
}

const createNewVoucherService = (data) => {
    return axios.post(`/api/create-new-voucher`, data)
}
const editVoucherService = (data) => {
    return axios.put('/api/update-voucher', data)
}
const deleteVoucherService = (id) => {
    return axios.delete('/api/delete-voucher', { data: { id: id } })
}
const getAllVouchers = () => {
    return axios.get(`/api/get-all-voucher`)
}
export { handleLogin, sendForgotPassword, handleResetPassword, getAllCodeService, createANewUser, deleteUserService, editUserService, getAllUsers, handleChangePassword, handleChangeStatusUser, editAllCodeService, deleteAllCodeService, createANewAllCode, createNewProduct, getAllProducts, editProductService, handleChangeStatusProduct, deleteProductService, getAllProductImageFromProductService, createNewProductImageService, editProductImageService, deleteProductImageService, getAllBanners, createNewBannerService, editBannerService, deleteBannerService, handleChangeStatusBanner, createNewTypeShipService, editTypeShipService, deleteTypeShipService, getAllTypeShips, createNewBlogService, editBlogService, deleteBlogService, getAllBlogs, handleChangeStatusBlog, createNewTypeVoucherService, editTypeVoucherService, deleteTypeVoucherService, getAllTypeVouchers, createNewVoucherService, editVoucherService, deleteVoucherService, getAllVouchers }