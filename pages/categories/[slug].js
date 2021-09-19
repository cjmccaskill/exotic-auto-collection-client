import Head from "next/head";
import Link from "next/link";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../apollo/queries/categories";
import VehiclesList from "../../components/VehiclesList";
import { TiArrowLeftOutline } from "react-icons/ti";

export default function CategoryPage({ category }) {
  return (
    <Query query={CATEGORIES_QUERY}>
        {({data: })}
      <div>
        <Head>
          <title>{category.name}</title>
        </Head>
        <Link href="/autos/currentinventory" passHref>
          <button className="text-sm font-bold mt-2 mx-4 rounded-full py-1 px-2 flex items-bottom hover:text-green-400 hover:bg-black hover:bg-opacity-80 hover:shadow-sm w-auto">
            <TiArrowLeftOutline className="text-xl mr-1" />
            Back to inventory
          </button>
        </Link>
        <VehiclesList autos={category.autos} />
      </div>
    </Query>
  );
}
