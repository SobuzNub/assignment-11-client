

import PropTypes from 'prop-types'
import DeleteModal from '../../components/Modal/DeleteModal'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import toast from 'react-hot-toast'

const BorrowBook = ({ borrow, refetch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const axiosPublic = useAxiosPublic();

    const closeModal = () => {
        setIsOpen(false)
    }

    // delete borrow book
    const { mutateAsync } = useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosPublic.delete(`/borrow/${id}`)
            console.log(data);
        },
        onSuccess: async data => {
            console.log(data);
            refetch();
            toast.success("Booking Canceled")

            // change borrow status
            await axiosPublic.patch(`/book/status/${borrow?.borrowId}`, { status: false })
        }

    })

    // handle delete
    const handleDelete = async (id) => {
        console.log(id);
        try {
            mutateAsync(id)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={borrow?.image}
                                className='mx-auto object-cover rounded h-10 w-15 '
                            />
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>{borrow?.bookName}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <p className='text-gray-900 whitespace-no-wrap'>{borrow?.category}</p>
                        </div>
                    </div>

                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{borrow?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {borrow?.borrowedDate}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>
                    {borrow?.returnDate}
                </p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button onClick={() => setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Return</span>
                </button>
                {/* delete modal */}
                <DeleteModal isOpen={isOpen} closeModal={closeModal} handleDelete={handleDelete} id={borrow?._id}></DeleteModal>
            </td>
        </tr>
    )
}

BorrowBook.propTypes = {
    booking: PropTypes.object,
    refetch: PropTypes.func,
}

export default BorrowBook