import { NextResponse } from 'next/server';

export async function GET() {

  async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await sleep(5000); // 5 saniye
  // Stale-While-Revalidate önbellekleme stratejisini ekleyerek yanıtı oluşturun
  const response  = NextResponse.json({ message: 'helloo' });
  const headers = response.headers;

// Eski değerleri kaybetmeden yeni bir başlık eklemek
headers.append('Content-Type', 'application/json');

// Eski değerleri kaybetmeden mevcut bir başlığı değiştirmek
headers.set('Cache-Control', 'public, max-age=30, stale-while-revalidate=604800');

// Yeni bir başlık eklemek
// headers.append('Custom-Header', 'my-custom-value');
  // response.headers 
  // response.cacheControl = {
  //   // s-maxage, önbelleğin kaç saniye süreyle geçerli olacağını belirtir
  //   sMaxAge: 60,
  //   // stale-while-revalidate, önbellek süresi dolmuş olsa bile istemcilere eski veriyi sunma süresini belirtir
  //   staleWhileRevalidate: 86400, // 1 gün
  // };

  return response;
}
