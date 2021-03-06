import axios from 'axios'
import {HOST} from './config'

export function getBanner () {
  const url = HOST + '/banner'
  return axios.get(url)
}

export function getRecommendList () {
  const url = HOST + '/personalized'
  return axios.get(url)
}

export function getNewSongs () {
  const url = HOST + '/personalized/newsong'
  return axios.get(url)
}

