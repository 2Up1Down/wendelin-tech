import React from 'react';
import Prismic from '@prismicio/client';
import SliceZone from 'next-slicezone';
import Client from '../utils/prismicHelpers';
import * as Slices from '../slices';
import Layout from '../components/layout';

const PageTemplate = ({ doc, layout }) => {
  console.log(doc);
  return (
    <Layout data={layout.data}>
      {doc?.data && (
        <SliceZone slices={doc.data.slices} resolver={({ sliceName }) => Slices[sliceName]} />
      )}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const doc = await Client().getByUID('page', params.uid, { lang: params.lang });
  const layout = (await Client().getByUID('layout', 'default', { lang: params.lang })) || {};
  console.log('from [uid].js');
  console.log(doc);
  console.log(layout);
  return {
    props: {
      doc,
      layout,
    },
  };
}

export async function getStaticPaths() {
  const docs = await Client().query(Prismic.Predicates.at('document.type', 'page'), { lang: '*' });

  return {
    paths: docs.results.map((doc) => {
      return { params: { uid: doc.uid, lang: doc.lang } };
    }),
    fallback: false,
  };
}

export default PageTemplate;
