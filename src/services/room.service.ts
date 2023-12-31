import { RoomDto } from '../dtos'
import { Room } from '../entities'

const create = async ({ name, capacity }: RoomDto) => {
  const room = new Room()

  room.name = name
  room.capacity = capacity

  const result = await room.save()
  return result
}

const findAll = async () => {
  const result = await Room.find({ relations: ['cinemaShows'] })
  return result
}

const findOne = async (id: RoomDto['id']) => {
  const result = await Room.findOne({ where: { id }, relations: ['cinemaShows'] })

  return result
}

export const roomService = {
  create,
  findAll,
  findOne
}
