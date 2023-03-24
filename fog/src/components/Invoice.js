import React from 'react'
import {Page, Text, View, Image, Document, StyleSheet} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    add: {
        color: "green",
        fontSize: 10,
    },
    info: {
        width: 100,
    },
    image: {
        width: 70,
        height: 70,
        marginVertical: -50,
        marginHorizontal: 450,
    },
    header: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
    },
    mainBody: {
        marginVertical: 50,
    },
    table: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header2: {
    borderTop: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
  // So Declarative and unDRY 👌
  row1: {
    width: '15%',
  },
  row2: {
    width: '30%',
  },
  row3: {
    width: '15%',
  },
  row4: {
    width: '15%',
  },
  row5: {
    width: '25%',
  },
  normal: {
    fontSize: 12,
  },
  prove: {
    fontSize: 12,
    marginVertical: 10,
  },
  total: {
   marginVertical: 15,
  },
  footer: {
    marginVertical: 30,
  }
});

export const Invoice = (props) => {
    const cart = props.cart
  return (
    <Document>
        <Page style={styles.body}>
            <View>
                <View style={styles.add}>
                    <Text>Fog Agricultural </Text>
                    <Text>Email: support@fog-agric.com</Text>
                    <Text>Tel : +2348069482021</Text>
                </View>
                <Image style={styles.image} src="./images/fog_logo.jpg"/>
                <View style={styles.mainBody}>
                    <Text style={styles.header} fixed>FOG Agricultural Services Invoice</Text>
                </View>
                <View style={styles.table}>
      <View style={[styles.row, styles.bold, styles.header2]}>
        <Text style={styles.row1}>S/N</Text>
        <Text style={styles.row2}>Item</Text>
        <Text style={styles.row4}>Price</Text>
        <Text style={styles.row3}>Quantity</Text>
        <Text style={styles.row5}>Amount</Text>
      </View>
      {cart.map((row, i) => (
        <View key={i} style={styles.row} wrap={false}>
          <Text style={styles.row1}>
            <Text style={styles.bold}>{i + 1}</Text> {row.firstName}
          </Text>
          <Text style={styles.row2}>{row.name}</Text>
          <Text style={styles.row3}>{row.price}</Text>
          <Text style={styles.row4}>
            <Text style={styles.bold}>{row.quantity}</Text>
          </Text>
          <Text style={styles.row5}>{row.price * row.quantity}</Text>
        </View>
      ))}
    </View>
                <View>
                    <Text style={styles.total}>Total: {props.total}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.normal}>
                        Account Number: 0668081251
                    </Text>
                    <Text style={styles.normal}>
                        Bank: Guarantee Trust Bank
                    </Text>
                    <Text style={styles.normal}>
                        Account Name: FOG Agricultural Services
                    </Text>
                </View>
                <View style={styles.prove}>
                    <Text>Prove of payment attached with this invoiced should be forwared on whatsapp to +2348062929576 </Text>
                </View>
            </View>
        </Page>
    </Document>
  )
}
