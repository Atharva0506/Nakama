import prismadb from "@/lib/prismadb";
import Categories from "@/components/categories";
import Companions from "@/components/companions";
import SearchInput from "@/components/search-input";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage: React.FC<RootPageProps> = async ({ searchParams }) => {
  try {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }
    const data = await prismadb.companion.findMany({
      where: {
        categoryId: searchParams.categoryId,
        userId,
        name: {
          contains: searchParams.name,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        _count: {
          select: {
            messages: true,
          }
        }
      },
    });

    const categories = await prismadb.category.findMany();

    return (
      <div className="h-full p-4 space-y-2">
        <SearchInput />
        <Categories data={categories} />
        <Companions data={data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error gracefully
    return <div>Error fetching data</div>;
  }
};

export default RootPage;
