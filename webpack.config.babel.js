import {join} from 'path'

const context = join(__dirname, 'src')

export default {
  context,
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'egyptAncientPlaces',
  },
  devtool: 'source-map',
  externals:['unique-random-array'],
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel'], include: context},
      {test: /\.json$/, loaders: ['json'], include: context},
    ],
  },
}
