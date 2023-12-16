'use server'
import path from 'node:path'
import fs from 'node:fs/promises'
import { revalidatePath, revalidateTag } from 'next/cache';
const pathFile = `${process.cwd()}/src/data/data.json`;

export default async function addListAction(daftarNama){
  console.log('daftar nama',daftarNama)
try {
  await fs.writeFile(pathFile,JSON.stringify(daftarNama))
  revalidatePath('/')
  return {msg:'success'}
} catch (error) {
  return {msg:error}
}
  
}