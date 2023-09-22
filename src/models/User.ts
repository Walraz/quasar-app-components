import { format } from 'date-fns'
import { z } from 'zod'

export const UserDateFrom = z.coerce
  .date()
  .transform((x) => format(new Date(x), 'yyyy-MM-dd'))
export const UserDateTo = z.coerce
  .date()
  .transform((x) => format(new Date(x), 'yyyy-MM-dd'))
export const UserAge = z.number().min(18)
export const UserName = z.string().nonempty()
export const UserLastname = z.string().nonempty()
export const UserTestUuid = z.array(z.number()).nonempty()
export const UserVehicleType = z.string().nonempty()

const UserDate = z
  .object({
    dateTo: UserDateTo,
    date: z.object({
      from: UserDateFrom,
    }),
  })
  .refine((data) => +new Date(data.dateTo) >= +new Date(data.date.from), {
    message: 'Datum måste börja efter från datum',
    path: ['dateTo'],
  })
  .refine((data) => +new Date(data.date.from) <= +new Date(data.dateTo), {
    message: 'Datum måste börja innan till datum',
    path: ['date.from'],
  })

export const UserWithoutDate = z.object({
  name: UserName,
  vehicle_type: z.object({ type: UserVehicleType }),
  age: UserAge,
  testUuid: UserTestUuid,
})

export const User = UserDate.and(UserWithoutDate)

export type IUser = z.infer<typeof User>
