export type NewsInfo = {
    from_id: string,
    title: string,
    post_id: string,
    cover: string,
    summary: string    
}

export type NewsDetail = NewsInfo &  {
    content: string,
    author_name: string,
    published_at: string
}