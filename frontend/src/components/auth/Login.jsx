import React from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { RadioGroup } from '../ui/radio-group'
import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'


const Login = () => {
    const loading=false;
  return (
    <div>
        <Navbar/>
        <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                <h1 className='font-bold text-xl mb-5'>Login</h1>
                <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="xyz@gmail.com"
                        />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="xxxxxx"
                        />
                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button> : <Button type="submit" className="w-full my-4">Login</Button>
                    }
                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Sign Up</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Login