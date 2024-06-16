import { NewsDetail } from "@/app/types"

// SSR
async function getDetail(postId:string): Promise<NewsDetail> {
    const resp = await fetch(`https://unidemo.dcloud.net.cn/api/news/36kr/${postId}`)
    const res = await resp.json()
    return res
}

export default async function NewDetail({params}: {params : {postId: string}}) {
    // postId
    // use client
    // const parms = useParams<{ postId: string }>()

    const detail = await getDetail(params.postId)
    return  <>
        <div style={{fontWeight: "900"}}>
            {detail.title}
        </div>
        <div style={{display: "flex"}}>
            <div>{detail.author_name}</div>
            <div>{detail.published_at}</div>
        </div>
        <div dangerouslySetInnerHTML={{__html: detail.content}}>
        </div>
        <div>

        </div>
    </>
} 