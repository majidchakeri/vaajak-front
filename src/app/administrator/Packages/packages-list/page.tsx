import Table from "@/components/ui-components/table/table";
import Api from "@/helpers/apiMethods";

import { useEffect, useState } from "react";

const PackageList = () => {
  let initialState = {
    packageList: [],
    loading: false,
    error: null,
  };

  let [state, setState] = useState(initialState);
  let { packageList, loading, error } = state;

  useEffect(() => {
    Api.admin.package
      .getPackageList()
      .then((res) => {
        setState((prevState) => ({
          ...prevState,
          packageList: res.data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Table dataSource={packageList} />
    </div>
  );
};

export default PackageList;
