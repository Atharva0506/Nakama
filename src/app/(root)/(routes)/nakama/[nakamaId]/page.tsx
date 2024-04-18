
import { auth, redirectToSignIn } from "@clerk/nextjs";
import {NakamaForm} from "./components/nakama-form"
import prismadb from "@/lib/prismadb";



interface CompanionIdPageProps {
  params: {
    nakamaId: string;
  };
};

const NakamaIdPage = async ({
  params
}: CompanionIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }


  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.nakamaId,
      userId,
    }
  });

  const categories = await prismadb.category.findMany();

  return ( 

    <NakamaForm initialData={companion} categories={categories} />
  );
}
 
export default NakamaIdPage;