'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (formData)=>{
  const secret = 'admin'
  const username = formData.get('username').toLowerCase()
  const password = formData.get('password')
  console.log(username, password)

  if(username === secret && password === secret){
    cookies().set('admin','admin')
    redirect('/add-list')
  }else{
    redirect('/login?error=true') 
  }
} 


export const logoutAction = async ()=>{
  cookies().delete('admin')
  return 'cookies deleted'
}