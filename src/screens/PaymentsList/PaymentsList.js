import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  FlatList,
  View
} from 'react-native'

import styles from './styles'
import RenderItem from '../../components/CustomerItems/CustomerItems'
import { CreditListService } from '../../services/Credit/CreditList'
import { formatCurrentDate, transformFrequently } from '../../utils/utils'
import Spinner from 'react-native-loading-spinner-overlay'
import { SearchBar } from 'react-native-elements'

import { viewPort } from '../../utils/utils'
import { CircularButton } from '../../components/atoms'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
    const newData = filteredData.filter(function(item) {
      const itemData = item.customer ? item.customer.toUpperCase() : ''
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    })

    setSearch(text)
    setData(newData)
  }

  const showDetails = () => {
    const params = {
      type: 'details'
    }
    props.navigation.navigate('PaidPaymentsByDate', params)
  }

  return (
    <>
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

          inputStyle={{backgroundColor: 'white'}}
          containerStyle={{
            backgroundColor: '#1e3d59',
            justifyContent: 'space-around',
            borderTopWidth:0,
            borderBottomWidth:0,
          }}
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
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 14,
          justifyContent: 'center',
          alignSelf: 'center',
          
        }}>
        <CircularButton
          onPress={() => showDetails()}
          title="Corte de Caja"
          icon={<MaterialCommunityIcons name="details" size={24} color="black" />}
          size={viewPort(60).width}
          lg
        />
      </View>
    </>
  )
}

export default PaymentsList
