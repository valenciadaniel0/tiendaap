import back from '../apis/back';

export const search = (code, auth_token) => async (dispatch) => {
    let config = {
        headers:{
            Authorization: `Bearer ${auth_token}`
        }
    }
    let error = false;
    const response = await back.get(`/items/${code}/find_by_code`, config).catch((errorResponse) => {
        error = true;
        dispatch({
            type: "FORM_ERROR",
            payload: errorResponse.response.data.error,
        });
    });

    if (!error) {
        dispatch({
            type: 'ITEM',
            payload: response.data
        });
    }
};
