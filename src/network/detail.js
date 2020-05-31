import {request} from './request';

export function getDetail(iid){
    return request({
        url: "/detail",
        params: {
            iid
        }
    })
}

export class GoodsInfo {
    constructor(intenInfo, columns, sercices) {
        this.title = intenInfo.title;
        this.desc = intenInfo.desc;
        this.newPrice = intenInfo.price;
        this.oldPrice = intenInfo.oldPrice;
        this.discount = intenInfo.discountDesc;
        this.columns = columns;
        this.servies = sercices;
        this.realPrice = intenInfo.lowNowPrice;
    }
}
