import Button from './Button'
import { HoverFocusTitle } from './Button/HoverFocusTitle'

const Buttons = () => {
  return (
    <div className='p-16'>
      <h3 className='text-2xl text-[#4F4F4F]'>Buttons</h3>

      {/* Primera pareja de botones */}
      <div className='grid grid-cols-[20%_80%] items-baseline justify-center mb-6'>
        <Button title={'<Button />'}>
          <button className='bg-[#E0E0E0] px-[13px] py-2 text-sm rounded-md shadow-[0px_2px_3px_0px_rgba(51,51,51,0.20)]"'>
            Defatult
          </button>
        </Button>
        <div>
          <HoverFocusTitle />
          <button className='bg-[#AEAEAE] px-[13px] py-2 text-sm rounded-md shadow-[0px_2px_3px_0px_rgba(51,51,51,0.20)]"'>
            Default
          </button>
        </div>
      </div>

      {/* Segunda pareja de botones */}
      <div className='grid grid-cols-[20%_80%] items-baseline justify-center mb-6'>
        <Button title={'<Button variant=”outline” />'}>
          <button className='px-[13px] text-[#3D5AFE] py-2 border-2 border-solid border-blue-500 text-sm rounded-md '>
            Defatult
          </button>
        </Button>

        <div>
          <HoverFocusTitle />
          <button className='bg-blue-trasnparent text-[#3D5AFE] border-2 border-solid border-blue-500 px-[13px] py-2 text-sm rounded-md'>
            Default
          </button>
        </div>
      </div>

      {/* Tercera pareja de botones */}
      <div className='grid grid-cols-[20%_80%] items-baseline justify-center mb-6'>
        <Button title={'<Button variant=”text” />'}>
          <button className='px-[13px] text-[#3D5AFE] py-2  text-sm rounded-md '>
            Defatult
          </button>
        </Button>

        <div>
          <HoverFocusTitle />
          <button className='bg-blue-trasnparent text-[#3D5AFE]  px-[13px] py-2 text-sm rounded-md'>
            Default
          </button>
        </div>
      </div>

      {/* Cuarta fila con solo un botón */}
      <div className='grid grid-cols-[20%_80%] items-baseline justify-center mb-6'>
        <Button title={'<Button disableShadow />'}>
          <button className='bg-[#3d5afe] px-[13px] py-2 text-sm rounded-md text-white'>
            Defatult
          </button>
        </Button>
      </div>

      {/* Quinta fila - pareja botones grises */}
      <div className='grid grid-cols-[20%_80%] items-baseline justify-center mb-6'>
        <Button title={'<Button disabled />'}>
          <button className='px-[13px] bg-[#E0E0E0] py-2 text-[#9E9E9E] text-sm rounded-md '>
            Disabled
          </button>
        </Button>

        <div>
          <Button title={'<Button variant=”text” disabled />'}>
            <button className='px-[13px] py-2 text-[#9E9E9E] text-sm rounded-md '>
              Disabled
            </button>
          </Button>
        </div>
      </div>

      {/* Sexta fila - Dos botones con nombre largo e iconos */}
      <div className='grid grid-cols-[30%_70%] items-baseline justify-center mb-6'>
        <Button title={'<Button startIcon=”local_grocery_store” />'}>
          <button className='px-[13px] bg-[#2962FF] py-2 text-white text-sm rounded-md flex gap-2 items-center'>
            <img
              src='public/icons8-agregar-a-carrito-de-compras-48.png'
              height={16}
              width={16}
            />{' '}
            <p>Default</p>
          </button>
        </Button>

        <div>
          <Button title={'<Button endIcon=”local_grocery_store” />'}>
            <button className='px-[13px] bg-[#2962FF] py-2 text-white text-sm rounded-md flex gap-2 items-center'>
              <p>Default</p>
              <img
                src='public/icons8-agregar-a-carrito-de-compras-48.png'
                height={16}
                width={16}
              />{' '}
            </button>
          </Button>
        </div>
      </div>

      {/* Séptima fila - Tres botones de diferentes tamaños */}
      <div className='grid grid-cols-[20%_20%_60%] items-center justify-center mb-6'>
        <Button title={'<Button size=”sm” />'}>
          <button className='px-[13px] py-2 h-[32px] w-[73px] bg-[#2962FF] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>

        <Button title={'<Button size=”md” />'}>
          <button className='px-[13px] py-2 h-[36px] w-[81px] bg-[#2962FF] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>

        <Button title={'<Button size=”lg” />'}>
          <button className='px-[13px] py-2 h-[42px] w-[93px] bg-[#2962FF] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>
      </div>

      {/* Octava fila - 4 botones */}
      <div className='grid grid-cols-[20%_20%_20%_40%] items-center justify-center mb-12'>
        <Button title={'<Button color=”default” />'}>
          <button className='px-[13px] py-2 bg-[#E0E0E0] text-sm rounded-md '>
            Default
          </button>
        </Button>

        <Button title={'<Button color=”primary” />'}>
          <button className='px-[13px] py-2 bg-[#2962FF] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>

        <Button title={'<Button color=”secondary” />'}>
          <button className='px-[13px] py-2 bg-[#455A64] text-white text-sm rounded-md '>
            Secondary
          </button>
        </Button>

        <Button title={'<Button color=”danger” />'}>
          <button className='px-[13px] py-2 bg-[#D32F2F] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>
      </div>

      {/* Novena fila - 4 botones hover */}
      <div className='grid grid-cols-[20%_20%_20%_40%] items-center justify-center mb-16'>
        <div>
          <HoverFocusTitle />
          <Button title={''}>
            <button className='px-[13px] py-2 bg-[#AEAEAE]  text-sm rounded-md '>
              Default
            </button>
          </Button>
        </div>
        <Button title={''}>
          <button className='px-[13px] py-2 bg-[#0039CB] text-white text-sm rounded-md '>
            Default
          </button>
        </Button>
        <Button title={''}>
          <button className='px-[13px] py-2 bg-[#1C313A] text-white text-sm rounded-md '>
            Secondary
          </button>
        </Button>
        <Button title={''}>
          <button className='px-[13px] py-2 bg-[#9A0007] text-white text-sm rounded-md '>
            Danger
          </button>
        </Button>
      </div>

      <p className='text-[#A9A9A9]'>
        created by <span className='font-bold'>diloes</span> - devChallenges.io
      </p>
    </div>
  )
}

export default Buttons
