import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList
} from 'react-native'

import styles from './styles'
import RenderItem from '../../components/CustomerItems/CustomerItems'
import { CreditListService } from '../../services/Credit/CreditList'
import { formatCurrentDate, transformFrequently } from '../../utils/utils'
import Spinner from 'react-native-loading-spinner-overlay'
import { SearchBar } from 'react-native-elements'

const PaymentsList = (props) => {
  const [data, setData] = useState(false)
  const [spinner, setSpinner] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpinner(true)
        const creditSales = await CreditListService()
        setData(mapData(creditSales))
        setFilteredData(mapData(creditSales))
      } catch (error) {
        console.log('Error - PaymentsList: ', error)
      } finally {
        setSpinner(false)
      }
    }

    fetchData()
  }, [])

  const mapData = (credits) => {
    return credits.data.map(data => {
      return {
        customer: data.sale.customer.name,
        city: data.sale.customer.address,
        saleDate: formatCurrentDate(data.sale.saleDate),
        id: data._id,
        vendor: data.sale.vendor,
        frequently: transformFrequently(data.paymentFrequently),
        total: data.totalSalesForCredit,
        totalpaid: data.totalpaid,
        balancemissing: data.balancemissing, 
        createdDate: formatCurrentDate(data.sale.saleDate),
        totalCredit: data.sale.totalCredit,
        products: data.sale.products,
        amountInitPaymentForCredit: data.amountInitPaymentForCredit,
        amountMonthsForCredit: data.amountMonthsForCredit
      }
    })
  }

  const SearchFilterFunction = (text) => {
    console.log('text: ', text)
    
      const newData = filteredData.filter(function(item) {
        //console.log(item.customer)
        const itemData = item.customer ? item.customer.toUpperCase() : ''
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })

      setSearch(text)
      setData(newData)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spinner
          visible={spinner}
          textContent={'Cargando...'}
        />
      <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => SearchFilterFunction(text)}
          onClear={text => SearchFilterFunction('')}
          placeholder="Buscar ..."
          value={search}
        />
      <FlatList
        data={data}
        renderItem={item => (
          <RenderItem 
            item={item}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default PaymentsList
