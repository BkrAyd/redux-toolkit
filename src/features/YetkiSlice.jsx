import { createSlice } from "@reduxjs/toolkit"

const YetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: ""
  },
  reducers: {
    kullaniciOlustur: () => {

    },
    kullaniciSil: () => {

    }
  }
})

export const { kullaniciOlustur, kullaniciSil } = YetkiSlice.actions

export default YetkiSlice.reducer