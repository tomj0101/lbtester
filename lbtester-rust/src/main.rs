use warp::Filter;

#[tokio::main]
async fn main() {
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let home = warp::path!("home" / String)
        .map(|name| format!("Welcome to Rust REST API, {}!", name));

    warp::serve(home)
        .run(([127, 0, 0, 1], 8888))
        .await;
}
