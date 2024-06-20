'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [firstname, setFirstname] = useState<string | null>(null)
  const [lastname, setLastname] = useState<string | null>(null)
  const [birthdate, setBirthdate] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
      const { data, error, status } = await supabase
        .from('userData')
        .select(`firstname,created_at, lastname, birthdate, email, username`)
        .eq('id', user?.id)
        .limit(1)

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setFirstname(data[0].firstname)
        setLastname(data[0].lastname)
        setBirthdate(data[0].birthdate)
        setEmail(data[0].email)
        setUsername(data[0].username)
        console.log(data)

      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    firstname,
    lastname,
    birthdate,
    email,
    username
  }: {
    firstname: string | null
    lastname: string | null
    birthdate: string | null
    email: string | null
    username: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('userData').upsert({
        id: user?.id as string,
        firstname: firstname,
        lastname,
        birthdate,
        email,
        username
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={user?.email} disabled />
      </div>
      <div>
        <label htmlFor="fullName">Vorname</label>
        <input
          id="firstname"
          type="text"
          value={firstname || ''}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Nachname</label>
        <input
          id="lastname"
          type="text"
          value={lastname || ''}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="birthdate">Geburtstag</label>
        <input
          id="birthdate"
          type="date"
          value={birthdate || ''}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="birthdate">username</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ firstname, lastname, birthdate, email, username })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}