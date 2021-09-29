import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const complete = ({navigation , route}) => {
    const { details, mid , txnid ,
        orderid ,
        gateway ,
        gatewayName ,
        txnAmt } = route.params;
    return (
        <View style={{padding:20 , backgroundColor:"#5DA3FA"}}>
          
          <Text style={{fontSize:25 , padding :5}}>Status :
                    {JSON.stringify(details)}
                </Text>
                <Text style={{fontSize:25 , padding :5}}>MID :
                    {JSON.stringify(mid)}
                </Text>
                <Text style={{fontSize:25 , padding :5}}>OID :
                    {JSON.stringify(orderid)}
                </Text>
                <Text style={{fontSize:25 , padding :5}}>Payment Type  :
                    {JSON.stringify(gateway)}
                </Text>
                <Text style={{fontSize:25 , padding :5}}> Date And Time :
                    {JSON.stringify(gatewayName)}
                </Text>
                <Text style={{fontSize:25 , padding :5}}>Amount :
                    {JSON.stringify(txnAmt)}
                </Text>
                {/* <Text>details: {JSON.stringify(details.ORDERID)}</Text> */}

        </View>
    )
}

export default complete

const styles = StyleSheet.create({})
