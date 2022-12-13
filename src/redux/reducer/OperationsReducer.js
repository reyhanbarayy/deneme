import OperationsConstants from "../constant/Operations";

const initalState="seçim yapılmadı";
const OperationsReducer = (state= initalState, action) =>{
    switch (action.type) {
        case OperationsConstants.TOPLAMA:
            return state="toplama işlemi için basıldı"
        case OperationsConstants.CIKARMA:
            return state="cıkarma işlemi için basıldı"
        case OperationsConstants.CARPMA:
            return state="carpma işlemi için basıldı"
        case OperationsConstants.BOLME:
            return state="bolme işlemi için basıldı"
        default:
            return state;
    }
}

export default OperationsReducer;