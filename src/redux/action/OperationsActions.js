import OperationsConstants from "../constant/Operations";

const Toplama = () => {
    return{
        type: OperationsConstants.TOPLAMA
    }
}

const Cıkarma = ()=>{
    return{
        type: OperationsConstants.CIKARMA
    }
    }
    
const Carpma = ()=>{
    return{
        type: OperationsConstants.CARPMA
    }
    
}
const Bolme = ()=>{
    return{
        type: OperationsConstants.BOLME
    }
    
}

export default OperationsActions = {
    Toplama,
    Cıkarma,
    Carpma,
    Bolme,
}