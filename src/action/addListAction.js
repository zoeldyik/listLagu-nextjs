'use server'
import path from 'node:path'
import fs from 'node:fs/promises'
import { revalidatePath, revalidateTag } from 'next/cache';
const pathFile = `${process.cwd()}/public/data.json`;

export default async function addListAction(daftarNama){
  console.log('daftar nama',daftarNama)
try {
  await fs.writeFile(pathFile,JSON.stringify(daftarNama))
  revalidatePath('/')
  return 'success'
} catch (error) {
  console.log(error)
  // return {msg:error}
  throw new Error('error dari action')
}
  
}