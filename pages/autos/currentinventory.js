import Head from "next/head";
import Query from "../../components/Query"
import AUTOS_QUERY from "../../apollo/queries/autos/autos";
import CATEGORIES_QUERY from "../../apollo/queries/categories/categories"
import VehiclesList from "../../components/VehicleList";
import CategoryButtons from "../../components/CategoryButtons";

export default function CurrentInventory() {
  return (
    <Query query={AUTOS_QUERY, CATEGORIES_QUERY}>
      {({ data: { autos, categories } }) => {
        return (
          <div className="flex flex-col justify-center bg-gray-200">
            <Head>
              <title>Current Inventory</title>
            </Head>
            <CategoryButtons categories={categories} />
            <VehiclesList autos={autos} />
          </div>
        );
      }}
    </Query>
  );
}
