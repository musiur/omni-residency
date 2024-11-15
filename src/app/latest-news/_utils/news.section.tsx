import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { A___GET__News } from "./actions";

const News = async () => {
  const { success, data } = await A___GET__News();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        {success && data?.results?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.results?.map((post: any, index: number) => {
              return (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader className="p-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="w-full h-56 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-4">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    {/* <p className="text-sm text-gray-600 mb-3">{post.description}</p> */}
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <time dateTime={post.created_at}>
                        {post.created_at}
                        {/* {new Date(post.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })} */}
                      </time>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag: any, tagIndex: any) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs bg-gray-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild className="w-full" variant="outline">
                      <Link href={`/latest-news/${post.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-4">No blogs found!</div>
        )}
      </div>
    </section>
  );
};

export default News;
