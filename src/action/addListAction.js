'use server'
import {prisma} from "../db"

import { revalidatePath } from 'next/cache';

export default async function addListAction(daftarNama){
  console.log('daftar nama',daftarNama)

  try {
    await prisma.Datas.deleteMany()
    await prisma.Datas.createMany({
      data: daftarNama
    })
    // console.log(createMany)
    revalidatePath('/')
    return 'success'
  } catch (error) {
    console.log(error)
    return error
  }
  
}