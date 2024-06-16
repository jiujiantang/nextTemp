import { NewsInfo } from "@/app/types"
import Link from "next/link"

// SSR
async function getNewList(): Promise<NewsInfo[]> {
    const resp = await fetch("https://unidemo.dcloud.net.cn/api/news")
    const res = await resp.json()
    return res
}

export default async function List() {
  const newList = await getNewList()
  return  <>
  <div>
    {newList.map(item => 
        <div style={{display:"flex", margin: "10px"}} >
          <div>
            <img src={item.cover} style={{height: "100px", objectFit: "cover", width: "100px"}}></img>
          </div>
          <div style={{marginLeft: "10px"}}>
            <div style={{fontWeight: 700}}>
              {/* 跳转 */}
              <Link href={`/news/${item.post_id}`} style={{color: "inherit", textDecoration: "none"}}>
                {item.title}
              </Link>
            </div>
            <div style={{color: "#888"}}>
              {item.summary}
            </div>
          </div>
        </div>
    )}
  </div>
</>
} 