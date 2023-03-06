import axios from 'axios'
import { useCallback, useState } from 'react'

type Memo = {
  id: string
  title: string
  category: string
  description: string
  date: string
  mark_div: number
}

export const useMemoData = () => {
  const [memos, setMemos] = useState<Array<Memo>>([])
  const [memo, setMemo] = useState<Memo>()

  // Spring Boot上のデータを取得するめ、ローカルの8080ポートへリクエスト
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 3000,
    headers: { 'Content-Type': 'application.json' },
  })

  const getAllMemos = (): void => {
    axiosInstance
      .get('/memos')
      .then((response) => {
        setMemos(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const findMemoById = (id: number): void => {
    axiosInstance
      .get('/memos/${id}')
      .then((response) => {
        setMemo(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createMemo = (
    title: string,
    category: string,
    description: string,
    date: string,
    mark_div: number,
  ): void => {
    axiosInstance
      .post('/memos', {
        title: title,
        category: category,
        description: description,
        date: date,
        mark_div: mark_div,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const updateMemo = (
    id: string,
    title: string,
    category: string,
    description: string,
    date: string,
    mark_div: number,
  ) => {
    axiosInstance
      .patch(`/memos/${id}`, {
        title: title,
        category: category,
        description: description,
        date: date,
        mark_div: mark_div,
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const deleteMemo = (id: string): void => {
    axiosInstance
      .delete(`/memos/${id}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return { memos, memo, getAllMemos, findMemoById, createMemo, deleteMemo, updateMemo }
}
