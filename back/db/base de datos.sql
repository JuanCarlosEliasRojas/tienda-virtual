USE [tienda_jc]
GO
/****** Object:  Table [dbo].[productos]    Script Date: 30/10/2021 02:51:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[productos](
	[id] [int] NOT NULL,
	[nombe] [varchar](max) NULL,
	[categoria] [int] NULL,
	[precio] [float] NULL,
	[cantidad] [int] NULL,
	[descripcion] [varchar](max) NULL,
 CONSTRAINT [PK_productos] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ticket]    Script Date: 30/10/2021 02:51:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ticket](
	[id_ticket] [int] IDENTITY(1,1) NOT NULL,
	[usuario] [varchar](40) NOT NULL,
	[cuidad] [varchar](100) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_ticket] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 30/10/2021 02:51:05 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[usuario] [varchar](40) NOT NULL,
	[nombre] [varchar](40) NOT NULL,
	[primer_ap] [varchar](40) NOT NULL,
	[segundo_ap] [varchar](40) NOT NULL,
	[password] [varchar](40) NOT NULL,
	[correo] [varchar](40) NOT NULL,
	[num_cel] [varchar](40) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[usuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[productos] ([id], [nombe], [categoria], [precio], [cantidad], [descripcion]) VALUES (2, N'q', 4, 4, 4, N'q')
GO
INSERT [dbo].[productos] ([id], [nombe], [categoria], [precio], [cantidad], [descripcion]) VALUES (4, N'q', 4, 4, 4, N'q')
GO
SET IDENTITY_INSERT [dbo].[ticket] ON 
GO
INSERT [dbo].[ticket] ([id_ticket], [usuario], [cuidad]) VALUES (1, N'Nios05', N'undefined')
GO
INSERT [dbo].[ticket] ([id_ticket], [usuario], [cuidad]) VALUES (2, N'pru', N'muy muiy lejos')
GO
INSERT [dbo].[ticket] ([id_ticket], [usuario], [cuidad]) VALUES (3, N'pru', N'rt')
GO
INSERT [dbo].[ticket] ([id_ticket], [usuario], [cuidad]) VALUES (4, N'pru', N'Acueducto de Chapultepec  #7 Ampliacion miramar Naucalpan de Juarez  53809 Estado de Mexico')
GO
SET IDENTITY_INSERT [dbo].[ticket] OFF
GO
INSERT [dbo].[users] ([usuario], [nombre], [primer_ap], [segundo_ap], [password], [correo], [num_cel]) VALUES (N'Juani69', N'Juana', N'Perez', N'Arollo', N'123456', N'aaaa@aaa', N'4454545')
GO
INSERT [dbo].[users] ([usuario], [nombre], [primer_ap], [segundo_ap], [password], [correo], [num_cel]) VALUES (N'Nios05', N'juan carlos', N'elias', N'rojas', N'juan123456789', N'juan@hotmail.com', N'5573671635')
GO
INSERT [dbo].[users] ([usuario], [nombre], [primer_ap], [segundo_ap], [password], [correo], [num_cel]) VALUES (N'pru', N'Por', N'revisar', N'aa', N'123456789', N'prueba@prueba.com', N'5573671635')
GO
INSERT [dbo].[users] ([usuario], [nombre], [primer_ap], [segundo_ap], [password], [correo], [num_cel]) VALUES (N'Pruba 1', N'Por', N'revisar', N'aa', N'juan123456789', N'prueba@prueba.com', N'5573671635')
GO
INSERT [dbo].[users] ([usuario], [nombre], [primer_ap], [segundo_ap], [password], [correo], [num_cel]) VALUES (N'prueba', N'Nombre cambiado', N'revisar', N'Perez', N'789456', N'aaaa@aaa', N'55548')
GO
ALTER TABLE [dbo].[ticket]  WITH CHECK ADD FOREIGN KEY([usuario])
REFERENCES [dbo].[users] ([usuario])
ON DELETE CASCADE
GO
