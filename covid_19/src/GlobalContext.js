import React, {createContext, useState, useEffect, useReducer} from 'react'
import Reducer from './Reducer.js'

const API_URL ='https://covid19.mathdro.id/api'
const URL = 'https://covid19.mathdro.id/api/countries/'
const initialState ={}
let urll = ""

export const GlobalContext = createContext(initialState);

export const ContextProvider =({children})=>{
    const [country, setCountry] = useState("")
    const [data,setData]= useState(initialState)
    const [path,setPath]= useState(API_URL)
    const [dailydata, setdailydata] = useState([])
    const [picker, setPicker] = useState([])

    function countrySelector(fetched){
        console.log("Country",fetched)
        setCountry(fetched)
        setPath(fetched==="Global" ? API_URL:`${URL}${fetched}`)
    }

    const load_data = async () =>{
        try{
            const respone = await fetch(path)
            const fdata = await respone.json()
            const modifiedData = {
                confirmed:fdata.confirmed.value,
                recovered:fdata.recovered.value,
                deaths:fdata.deaths.value
            }
            setData(modifiedData)
        }
        catch(error) {
            console.log("FAILED")
        }
        // console.log("Fetched", data)
    }

    const dailyData = async () =>{
        try{
            const respone = await fetch(`${API_URL}/daily`)
            const fdata = await respone.json()
            const modifiedData = fdata.map((daily)=>({
                confirmed:daily.confirmed.total,
                recovered:daily.recovered.total,
                deaths:daily.deaths.total,
                date:daily.reportDate
            }))
            setdailydata(modifiedData)
        }
        catch(error) {
            console.log("FAILED")
        }
        // console.log("Fetched", data)
    }

    const countryPicker = async () =>{
        try{
            const respone = await fetch(URL)
            const fdata = await respone.json()
            setPicker(fdata.countries)
        }
        catch(error) {
            console.log("FAILED")
        }
        // console.log("Fetched", data)
    }

    useEffect(() => {
        load_data();
        dailyData();
        countryPicker();
    }, [setData,country,path,setdailydata,setPicker])
    
    return (
        <GlobalContext.Provider value={
            {
                data,
                dailydata,
                picker,
                countrySelector
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}
