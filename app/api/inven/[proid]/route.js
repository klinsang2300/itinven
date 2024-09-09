import { NextResponse } from "next/server";
import ExcuteQuery from "@/app/lib/db";

export async function GET(req , context ) {
    const {params} = context;
    console.log(params.proid)
    let product=  await ExcuteQuery(`SELECT PRO_ID,COM_NAME,TYPE_NAME,
BRAND_NAME + ' ' + MODEL_NAME BRAN,
DEP_NAME,Invoice_Date,VENDOR_NAME,
Price,Serial,Warranty,SPAC 
FROM INVEN_VIEW INVEN_TB WHERE PRO_ID ='${params.proid}' ` )

return NextResponse.json(product[0]);
}