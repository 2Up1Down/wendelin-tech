import React from 'react';
import Prismic from '@prismicio/client';
import SliceZone from 'next-slicezone';
import Client, { manageLocal } from '../utils/prismicHelpers';
import * as Slices from '../slices';
import Layout from '../components/layout';

const PageTemplate = ({ doc, layout }) => {
  return (
    <Layout data={layout.data} altLangs={doc.alternate_languages}>
      {doc?.data && (
        <SliceZone slices={doc.data.slices} resolver={({ sliceName }) => Slices[sliceName]} />
      )}
    </Layout>
  );
};

export async function getStaticProps({ params, locale, locales }) {
  const doc = (await Client().getByUID('page', params.uid, { lang: locale })) || {};
  const layout = (await Client().getSingle('layout', { lang: locale })) || {};

  const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

  return {
    props: {
      doc,
      layout,
      lang: {
        currentLang,
        isMyMainLanguage,
      },
    },
  };
}

export async function getStaticPaths() {
  const docs = await Client().query(Prismic.Predicates.at('document.type', 'page'), { lang: '*' });

  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid }, locale: doc.lang };
    }),
    fallback: false,
  };
}

export default PageTemplate;
