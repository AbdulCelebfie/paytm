import React, { useRef, useState } from 'react';
import {
    ScrollView,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import AllInOneSDKManager from 'paytm_allinone_react-native';

const transacationPage= ({navigation}) => {
  
  const orderDetail = {
      orderId:'TEST510',
      mid:'Techno95881765134052',
      tranxToken:"a4baa14807ac40039b8cd0ea4873346e1632913154982",
      amount:'1.00',
      callbackUrl: "https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=TEST510",
      isStaging:true,
      appInvokeRestricted:false,
  }

  const handleTranscation = () =>{
    AllInOneSDKManager.startTransaction(
      orderDetail.orderId,
      orderDetail.mid,
      orderDetail.tranxToken,
      orderDetail.amount,
      orderDetail.callbackUrl,
      orderDetail.isStaging,
      orderDetail.appInvokeRestricted,
     )
     .then(async(result) => {
    //   console.log("result",JSON.stringify(result));
      const details =await JSON.stringify(result.RESPMSG);
      const mid =await JSON.stringify(result.MID);
      const txnid =await JSON.stringify(result.TXNID);
      const orderid =await JSON.stringify(result.ORDERID);
      const gateway =await JSON.stringify(result.GATEWAYNAME);
      const gatewayName =await JSON.stringify(result.TXNDATE);
      const txnAmt =await JSON.stringify(result.TXNAMOUNT);
      
      console.log("Yeh hai details destructured ",details);
      navigation.navigate('complete' , {
          details : details ,
          mid :mid,
          txnid :txnid,
          orderid :orderid,
          gateway :gateway,
          gatewayName :gatewayName,
          txnAmt:txnAmt
      })

     })
     .catch((err) => {
      console.log("Kuch Galat huaaa hai bhai");
     });
  }
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={()=>{handleTranscation()}}>
        <Text style={styles.txt}>Press Me</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn:{
    backgroundColor:"red",
    marginTop:40,
    padding:20,
    borderRadius:20
  },
  txt :{
    fontSize:30,
    textAlign:"center"
  }

});

export default transacationPage;
