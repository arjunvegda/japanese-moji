interface FetchVersionReturn {
  releaseVersion: string | null;
}

const fetchVersion = async (): Promise<FetchVersionReturn> => {
  const result = await fetch('https://registry.npmjs.org/-/package/japanese-moji/dist-tags')
    .then((res) => res.json())
    .catch(() => {
      return { version: null };
    });

  return {
    releaseVersion: result?.latest,
  };
};

interface FetchBundleSizeReturn {
  gzipBundleSize: number | null;
}

const fetchBundleSize = async (): Promise<FetchBundleSizeReturn> => {
  const result = await fetch('https://bundlephobia.com/api/size?package=japanese-moji@latest')
    .then((res) => res.json())
    .catch(() => {
      return { gzip: null };
    });

  return {
    gzipBundleSize: result?.gzip,
  };
};

interface FetchCodeCovReturn {
  codeCoverage: number;
}
const fetchCodeCov = async (): Promise<FetchCodeCovReturn> => {
  const result = await fetch('https://codecov.io/api/gh/arjunvegda/japanese-moji/branch/main/')
    .then((res) => res.json())
    .catch(() => {
      return {};
    });

  const coverage = result?.commit?.totals ? result.commit.totals?.c : 0;
  return {
    codeCoverage: coverage,
  };
};

interface FetchPackageInfoReturn
  extends FetchVersionReturn,
    FetchBundleSizeReturn,
    FetchCodeCovReturn {}

export const fetchPackageInfo = async (): Promise<FetchPackageInfoReturn> => {
  const response = await Promise.all([fetchVersion(), fetchBundleSize(), fetchCodeCov()]);
  const responseToObject = response.reduce<FetchPackageInfoReturn>(
    (acc, curr) => ({
      ...acc,
      ...curr,
    }),
    {} as FetchPackageInfoReturn,
  );

  return responseToObject;
};
